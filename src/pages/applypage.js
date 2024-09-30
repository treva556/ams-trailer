

import React, { useState } from 'react';
import '../App.css';

function Apply() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cv, setCv] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && cv) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="App py-6 px-4 lg:px-36">

      <div className=' flex justify-start'>
      <h1 className="text-2xl font-bold mb-4">Job Requirements</h1>
      <ul className="list-disc ml-5 mb-4">
        <li>Relevant degree or certification.</li>
        <li>At least 2 years of experience in a similar role.</li>
        <li>Strong communication and interpersonal skills.</li>
        <li>Ability to work independently and as part of a team.</li>
        <li>Proficiency in relevant software and tools.</li>
      </ul>
      </div>
      <h2 className="text-xl font-semibold mb-2">Apply Now</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="cv">Upload CV:</label>
          <input
            type="file"
            id="cv"
            onChange={(e) => setCv(e.target.files[0])}
            className="border border-gray-300 rounded p-2 w-full"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white font-semibold py-2 rounded hover:bg-gray-800"
        >
          Submit Application
        </button>
      </form>
      {submitted && (
        <div className="mt-4 p-4 bg-green-500 text-white rounded">
          Job applied
        </div>
      )}
    </div>
  );
}

export default Apply;