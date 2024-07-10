
const testimonials = [
  { id: 1, name: "John Doe", text: "Great products and excellent service!" },
  { id: 2, name: "Jane Smith", text: "Highly recommend Campers Shop for all your camping needs." },
];

const Testimonials = () => {

  return (

    <section className="">
      <div className="container mx-auto px-4 bg-[#0E131B] py-12 ">
        <h2 className="text-3xl text-[#ececec] font-bold mb-6 text-center ">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[black] p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
