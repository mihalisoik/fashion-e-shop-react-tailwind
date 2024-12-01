import { useState } from "react";

function Newsletter() {
  const [userEmail, setUserEmail] = useState("");

  function changeEmail(event) {
    const email = event.target.value;
    setUserEmail(email);
  }

  function checkIfUserPressedEnter(event) {
    if (event.key === "Enter") {
      submitEmail();
    }
  }

  function submitEmail(event) {
    const validEmails = [
      "@gmail.com",
      "@yahoo.com",
      "@yahoo.gr",
      "@outlook.com",
      "@hotmail.com",
      "@live.com",
      "@icloud.com",
    ];

    const isValid = validEmails.some((ending) => userEmail.endsWith(ending));

    if (userEmail) {
      if (isValid) {
        alert("I sent a confirmation email to your email account");
      } else {
        alert("Not valid email");
      }
    } else {
      alert("Please give an email address");
    }
  }

  return (
    <section id="newsletter" className="py-20">
      <div className="max-container flex flex-col justify-center items-center gap-10 text-center max-lg:px-5 lg:flex-row lg:justify-around md:p-3">
        <h2 className="text-3xl font-primary font-semibold">
          Don’t Miss a Beat – Join Our{" "}
          <span className="font-bold text-primary">Newsletter</span> for
          Exclusive Updates!
        </h2>
        <form className="flex gap-10 items-center max-sm:flex-col max-[1440px]:px-5">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="youremail@example.com"
            className="w-80 md:w-96 px-5 py-1.5 rounded-md shadow-lg"
            onChange={changeEmail}
            onKeyDown={checkIfUserPressedEnter}
          />
          <button
            className="main-button main-button-hover py-3.5"
            onClick={submitEmail}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
