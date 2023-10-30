import React from "react";

export default function Faq() {
  return (
    <div className="main2">
      <div className="container my-3">
        <h1 className="text-center mb-4">Frequently Asked Questions</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b>What is HealthCare?</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Healthcare refers to the organized system of medical services
                and resources that promote and maintain the health and
                well-being of individuals and populations. It involves medical
                professionals, facilities, technologies, and practices aimed at
                preventing, diagnosing, treating, and managing health-related
                issues. While central databases and user interactability can
                play a role in healthcare, the term encompasses a broader
                spectrum of services and activities, including clinical care,
                public health initiatives, research, and more.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <b>
                  What documents do we need to upload during registration
                  process?
                </b>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The specific document required for registration processes
                include any Personal identification (e.g., passport, driver's
                license, or ID card). It's essential to check the specific
                registration guidelines provided by the organization to ensure
                you submit the correct documents.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <b>Is it mandatory to upload ID proof?</b>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, it is mandatory to upload ID proof during the registration
                process, especially when it is required for identity
                verification for security, legal, or regulatory reasons.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <b>What is UAI?</b>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                "UAI" can stand for "Unique Applicant ID". It refers
                to a system or process used to assign a distinct and individual
                identification code or number to each applicant. This code helps
                in differentiating and tracking applicants within HealthCare database, ensuring that each applicant is uniquely
                identified and can be associated with their respective records,
                applications, or transactions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
