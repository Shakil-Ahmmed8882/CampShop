import React from "react";
import { Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { NavIcon } from "@/assets/icons/Icons";
import { generalPaths } from "@/routes/generalRoutes";
import { Link } from "react-router-dom";
import BlurBall from "@/components/shared/visuals/BlurBall";

const SidebarNavigation: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <NavIcon clickHandler={showLoading} />

      <Drawer
        destroyOnClose
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
        closeIcon={<CloseOutlined className="text-white absolute right-8 top-8" />} // Custom close icon
        className="!bg-[#000000c3] text-white bg-blend-overlay "
      >
        <BlurBall bigBall={false} className="top-3 right-0" />

        <div className="flex flex-col gap-9">
          {generalPaths.map((route) => (
            <Link
              onClick={() => setOpen(false)}
              key={route.path} // Add a unique key for each Link
              className="hover:bg-primaryLight py-2 px-1 smooth-transition hover:!text-primaryColor rounded-lg"
              to={route.path}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default SidebarNavigation;
