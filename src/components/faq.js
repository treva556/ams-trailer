
//////App code 
import React from 'react';
import '../App.css'; 


function Faq() {
  return (
    <>
    <section class="col2 text-black py-4">
      <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 class="mb-12 text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
        
          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">What services do you offer?</summary>
            <div class="px-4 pb-4">
              <p>We offer a wide range of security services, including manned security guards for event security, corporate security, residential security, and mobile patrols.</p>
            </div>
          </details>

          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">How are your security guards trained?</summary>
            <div class="px-4 pb-4">
              <p>Our security guards undergo rigorous training that includes physical fitness, surveillance techniques, conflict resolution, and emergency response. We ensure they are fully licensed and qualified to meet your security needs.</p>
            </div>
          </details>

          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">Do you provide 24/7 security services?</summary>
            <div class="px-4 pb-4">
              <p>Yes, we offer round-the-clock security services to ensure the safety of our clients at any time of the day or night.</p>
            </div>
          </details>

    

          <details>
            <summary class="py-2 outline-none cursor-pointer focus:underline">How do I get a quote for your services?</summary>
            <div class="px-4 pb-4">
              <p>You can request a quote by contacting us via our website or phone. Provide details of your requirements, and we will offer a customized pricing plan.</p>
            </div>
          </details>

        </div>
      </div>
    </section>
    </>
  );
}

export default Faq;