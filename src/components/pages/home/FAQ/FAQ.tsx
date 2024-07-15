import Container from "@/components/shared/Container";
import BlurBall from "@/components/shared/visuals/BlurBall";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Title from "@/components/ui/Title";

const faqs = [
  {
    id:1,
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    id:2,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide.",
  },
  {
    id:3,
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    id:4,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide.",
  },
  {
    id:5,
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    id:6,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 relative ">
      <BlurBall />
      <Container className="px-2 sm:px-3 lg:px-8">
        <Title className="md:text-center pb-10 pl-6">
           FA
          <span className="text-gradient">Q</span>
        </Title>
        <Accordion
          type="single"
          collapsible
          className="grid gap-6  lg:grid-cols-2"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.id} className=" border-none" value={`${index}`}>
              <AccordionTrigger
                className="text-[#9b9b9b] font-normal text-[15px] sm:text-[20px] leading-[31px] p-8 hover:text-[#bcbcbc] bg-[#141510b1]
              rounded-lg
              "
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#dbdbdb] text-[13px] sm:text-[20px] leading-relaxed flex items-center gap-3 bg-[#0000008d] p-8">
                <div className="size-3 rounded-lg bg-primary-gradient"></div>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
