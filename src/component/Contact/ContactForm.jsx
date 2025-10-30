import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enquiry: "",
        message: "",
        contactMethod: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="py-10 md:py-20">
            <div className="flex justify-center items-center   bg-white">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-5xl px-4 space-y-4"
                >
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block  text-[#8C7050] text-sm font-medium mb-4">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full border border-[#010101] h-12 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block  text-[#8C7050] text-sm font-medium mb-4">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full border border-[#010101] h-12 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block  text-[#8C7050] text-sm font-medium mb-4">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-[#010101] h-12 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block  text-[#8C7050] text-sm font-medium mb-4">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-[#010101] h-12 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    {/* Nature of Enquiry */}
                    <div>
                        <label className="block  text-[#8C7050] text-sm font-medium mb-4">
                            Nature of Enquiry
                        </label>
                        <select
                            name="enquiry"
                            value={formData.enquiry}
                            onChange={handleChange}
                            className="w-full border border-[#010101] h-12 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        >
                            <option value="">Select...</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Support</option>
                            <option value="feedback">Feedback</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block  text-[#8C7050] text-sm font-medium mb-4">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-[#010101]  rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {/* Contact Preference */}
                    <div>
                        <label className="block  text-[#8C7050] text-sm font-medium mb-4">
                            How would you like us to contact you?
                        </label>
                        <select
                            name="contactMethod"
                            value={formData.contactMethod}
                            onChange={handleChange}
                            className="w-full border border-[#010101] h-12 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        >
                            <option value="">Select...</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone Call</option>
                            <option value="whatsapp">WhatsApp</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-15">
                        <button
                            type="submit"
                            className="bg-[#8B6F47] hover:bg-[#7A5F3E] text-white px-6 py-2 rounded-full transition w-full h-13.5 max-w-56.75"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
