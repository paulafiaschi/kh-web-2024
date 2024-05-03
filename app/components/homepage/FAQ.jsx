import Image from "next/image";

export default function FAQ() {
  return (
    <section className="block">
      <h2>FAQ</h2>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Question 1</div>
        <div className="collapse-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            harum quia suscipit repudiandae minima eligendi dignissimos facere!
            Molestias nihil nesciunt perspiciatis velit obcaecati ducimus
            maiores laudantium, nam molestiae sed vero.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Question 2</div>
        <div className="collapse-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            harum quia suscipit repudiandae minima eligendi dignissimos facere!
            Molestias nihil nesciunt perspiciatis velit obcaecati ducimus
            maiores laudantium, nam molestiae sed vero.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow rounded-none">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Question 3</div>
        <div className="collapse-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            harum quia suscipit repudiandae minima eligendi dignissimos facere!
            Molestias nihil nesciunt perspiciatis velit obcaecati ducimus
            maiores laudantium, nam molestiae sed vero.
          </p>
        </div>
      </div>

      <p className="mt-16 text-3xl font-bold">Still have questions?</p>
      <p>Feel free to reach out to us.</p>
      <button className="btn btn-secondary mt-4">Contact Us</button>
    </section>
  );
}
