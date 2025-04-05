import React from "react";
import { useForm } from "react-hook-form";

const Career = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "this is form data");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-semibold text-gray-600 text-center">
          HR Manager
        </h2>
        <div className="w-16 mx-auto border-b-4 border-gray-400 my-4"></div>

        <div className="grid md:grid-cols-2 gap-8 py-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Join Our Team as a HR Manager
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li> Calgary, AB</li>
              <li> $38-$53 an hour</li>
              <li> Schedule: Monday to Friday</li>
              <li> Benefits: Dental care, Vision care</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">
              Responsibilities and Duties
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Oversee HR policy development and implementation.</li>
              <li>Manage recruitment and selection processes.</li>
              <li>Engage in coaching and mentoring of the management team.</li>
              <li>
                Implement performance management and compensation programs.
              </li>
              <li>Ensure compliance with legal requirements.</li>
              <li>
                Develop and implement effective performance
                management/compensation programs.
              </li>
              <li>Ensure all discipline issues are performed in accordance.</li>
              <li>
                Ensure that the corporate safety program is effective in
                preventing workplace injuries.
              </li>
              <li>
                Conduct meetings on employment and organization policies,
                benefits and compensation, etc.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">
              Qualifications and Skills
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Bachelor's degree required, preferably in human resources or
                business related field.
              </li>
              <li>
                Minimum 3 – 5 years of human resource management experience.
              </li>
              <li>Excellent communication, coaching and mentoring skills</li>
              <li>Proficient with Microsoft Office.</li>
              <li>Familiar with labor laws and regulations</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Apply Now</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700">Name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "At least three characters are required",
                    },
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.phone && (
                  <p className="text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Message*
                </label>
                <textarea
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.message && (
                  <p className="text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gray-700 text-white font-semibold py-2 rounded hover:bg-blue-600"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-semibold text-gray-600 text-center">
          IT Specialist
        </h2>
        <div className="w-16 mx-auto border-b-4 border-gray-400 my-4"></div>

        <div className="grid md:grid-cols-2 gap-8 py-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Join Our Team as a IT Specialist
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li> Calgary, AB</li>
              <li> $38-$53 an hour</li>
              <li> Schedule: Monday to Friday</li>
              <li> Benefits: Dental care, Vision care</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Key Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Oversee HR policy development and implementation.</li>
              <li>Manage recruitment and selection processes.</li>
              <li>Engage in coaching and mentoring of the management team.</li>
              <li>
                Implement performance management and compensation programs.
              </li>
              <li>Ensure compliance with legal requirements.</li>
              <li>
                Develop and implement effective performance
                management/compensation programs.
              </li>
              <li>Ensure all discipline issues are performed in accordance.</li>
              <li>
                Ensure that the corporate safety program is effective in
                preventing workplace injuries.
              </li>
              <li>
                Conduct meetings on employment and organization policies,
                benefits and compensation, etc.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">
              Additional Requirements
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Bachelor's degree required, preferably in human resources or
                business related field.
              </li>
              <li>
                Minimum 3 – 5 years of human resource management experience.
              </li>
              <li>Excellent communication, coaching and mentoring skills</li>
              <li>Proficient with Microsoft Office.</li>
              <li>Familiar with labor laws and regulations</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Apply Now</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700">Name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "At least three characters are required",
                    },
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.phone && (
                  <p className="text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Message*
                </label>
                <textarea
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.message && (
                  <p className="text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gray-700 text-white font-semibold py-2 rounded hover:bg-blue-600"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-5xl font-semibold text-gray-600 text-center">
          Marketing Coordinator
        </h2>
        <div className="w-16 mx-auto border-b-4 border-gray-400 my-4"></div>

        <div className="grid md:grid-cols-2 gap-8 py-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Join Our Team as a Marketing Coordinator
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li> Calgary, AB</li>
              <li> $38-$53 an hour</li>
              <li> Schedule: Monday to Friday</li>
              <li> Benefits: Dental care, Vision care</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Responsibilities:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Oversee HR policy development and implementation.</li>
              <li>Manage recruitment and selection processes.</li>
              <li>Engage in coaching and mentoring of the management team.</li>
              <li>
                Implement performance management and compensation programs.
              </li>
              <li>Ensure compliance with legal requirements.</li>
              <li>
                Develop and implement effective performance
                management/compensation programs.
              </li>
              <li>Ensure all discipline issues are performed in accordance.</li>
              <li>
                Ensure that the corporate safety program is effective in
                preventing workplace injuries.
              </li>
              <li>
                Conduct meetings on employment and organization policies,
                benefits and compensation, etc.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6">
              Additional Requirements
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Bachelor's degree required, preferably in human resources or
                business related field.
              </li>
              <li>
                Minimum 3 – 5 years of human resource management experience.
              </li>
              <li>Excellent communication, coaching and mentoring skills</li>
              <li>Proficient with Microsoft Office.</li>
              <li>Familiar with labor laws and regulations</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Apply Now</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700">Name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "At least three characters are required",
                    },
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.phone && (
                  <p className="text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Message*
                </label>
                <textarea
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full p-2 border rounded bg-white"
                />
                {errors.message && (
                  <p className="text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gray-700 text-white font-semibold py-2 rounded hover:bg-blue-600"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;

