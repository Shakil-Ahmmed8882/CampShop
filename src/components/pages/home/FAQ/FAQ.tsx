import Container from "@/components/shared/Container";
import BlurBall from "@/components/shared/visuals/BlurBall";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide.",
  },
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide.",
  },
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 relative ">
      <BlurBall/>
      <Container>
        <h2 className="text-3xl text-[#ececec] font-bold mb-16 text-center ">
          FAQ
        </h2>
        <Accordion type="single" collapsible className="grid gap-6 sm:px-8 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <AccordionItem className=" border-none" value={`${index}`}>
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
