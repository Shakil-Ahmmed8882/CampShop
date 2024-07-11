

const About= (): JSX.Element => {
  return (
    <>
  {/*
// v0 by Vercel.
// https://v0.dev/t/PWoqVk3I940
*/}
  <div className="dark:bg-muted-foreground dark:text-background">
    <header className="bg-primary dark:bg-primary-foreground py-12 md:py-20">
      <div className="container">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          About Us
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-primary-foreground dark:text-primary">
          Learn more about ou
        </p>
      </div>
    </header>
    <main>
      <section className="py-12 md:py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground dark:text-background">
              At our company, we
            </p>
            <p className="mt-4 text-muted-foreground dark:text-background">
              Our core values of integrity, excellence, and customer
              satisfaction guide everything we do. We are committed to building
              a sustainable and socially responsible business that makes a
              positive impact on the world.r core values of
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <div className="mt-4 space-y-4 text-muted-foreground dark:text-background">
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+1 (555) 555-555</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@company.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>123 Main Street, Anytown USA 12345</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold">Find Us</h3>
              <div className="mt-4 aspect-video overflow-hidden rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-muted dark:bg-muted-foreground">
        <div className="container">
          <h2 className="text-2xl font-bold">Meet the Team</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <img
                src="/placeholder.svg"
                width={80}
                height={80}
                alt="John Doe"
                style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-muted-foreground dark:text-background">
                  CEO and Co-Founder
                </p>
                <p className="mt-2 text-muted-foreground dark:text-background">
                  John is a{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="/placeholder.svg"
                width={80}
                height={80}
                alt="Jane Smith"
                className="h-20 w-20 rounded-full object-cover"
                style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
              />
              <div>
                <h3 className="text-lg font-semibold">Jane Smith</h3>
                <p className="text-muted-foreground dark:text-background">
                  CTO and{" "}
                </p>
                <p className="mt-2 text-muted-foreground dark:text-background">
                  Jane is a technical visionary with a deep understanding of
                  cutting-edge technologies and a proven track record of
                  delivering complex software projects.ane is{"{"}" "{"}"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img
                src="/placeholder.svg"
                width={80}
                height={80}
                alt="Michael Johnson"
                style={{ aspectRatio: "80 / 80", objectFit: "cover" }}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Michael Johnson</h3>
                <p className="text-muted-foreground dark:text-background">
                  Head of Product
                </p>
                <p className="mt-2 text-muted-foreground dark:text-background">
                  Michae
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container">
          <h2 className="text-2xl font-bold">Conne</h2>
          <div className="mt-8 flex justify-center gap-4">
            <a
              className="text-muted-foreground dark:text-background hover:text-primary dark:hover:text-primary-foreground"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twit</span>
            </a>
            <a
              className="text-muted-foreground dark:text-background hover:text-primary dark:hover:text-primary-foreground"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
              <span className="sr-only">Link</span>
            </a>
            <a
              className="text-muted-foreground dark:text-background hover:text-primary dark:hover:text-primary-foreground"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Fac</span>
            </a>
            <a
              className="text-muted-foreground dark:text-background hover:text-primary dark:hover:text-primary-foreground"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-primary dark:bg-primary-foreground py-6 text-primary-foreground dark:text-primary">
      <div className="container flex items-center justify-between">
        <p>© 2024 Company Name. All rights reserved.</p>
        <a
          className="text-primary-foreground dark:text-primary hover:underline"
          href="#"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  </div>
</>

  );
};

export default About; 