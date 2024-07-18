
import Container from "@/components/shared/Container";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/Title";

// clients images 
import clientImg1 from '@/assets/clients/client1.jpg'
import clientImg2 from '@/assets/clients/client2.avif'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Great products and excellent service!",
    title: "CEO, Acme Inc.",
    image:clientImg1,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Highly recommend Campers Shop for all your camping needs.",
    title: "Outdoor Enthusiast",
    image:clientImg2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    text: "CampShop's products have made my outdoor adventures more comfortable and enjoyable.",
    title: "Adventure Travel Blogger",
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNIbcH5U_TCuXITUQCKLdqHL_rsL25Esl5f_vNark4Ao7Eziiqz_ggFyx2KcxPBeCY24&usqp=CAU',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#07180884] py-20">
      <Container>
        <div className=" max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12 md:text-center">
            <Title className="!text-2xl sm:!text-3xl lg:!text-center">
              What Our Clients Say
            </Title>
            <Description className=" pb-8 md:px-3 pt-1">
              Hear from the people who love our products.
            </Description>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-tr from-[#303b3031] to-[#1e2f2274] smooth-transition p-6 rounded-lg shadow-lg transition-all hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12 mr-4 border-2 border-primary">
                    <img
                      className="aspect-square object-cover h-full w-full"
                      alt={`Client ${testimonial.id}`}
                      src={`${testimonial?.image}`}
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white pb-3">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primaryColor">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-gray-400 mt-6">
                  {testimonial.text}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
