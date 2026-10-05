import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import "./FAQ.css";

const faqs = [
    {
        question: "What type of rubber should I use?",
        answer:
            "At VSRP, we know rubber. Across any application, our experts are well equipped to advise on the best make and material for your rubber products. If you need reliable performance, we can show you exactly how to get it. All you need to do is give us a call.",
    },
    {
        question: "What is the hardness scale for rubber?",
        answer:
            "Rubber hardness is commonly measured using Shore hardness scales. Our team can help determine the appropriate hardness based on your application and performance requirements.",
    },
    {
        question: "What are minimum order quantities?",
        answer:
            "Minimum order quantities can vary depending on the product, material, tooling requirements and manufacturing process. Contact our team with your requirements and we can advise you.",
    },
    {
        question: "How can I get a quote?",
        answer:
            "You can contact our team with your drawing, sample or product specifications. We will review your requirements and provide the appropriate quotation.",
    },
    {
        question: "Which materials types do VSRP offer?",
        answer:
            "VSRP works with a range of rubber materials selected according to application, performance, environmental and manufacturing requirements.",
    },
    {
        question: "Can VSRP source products & materials?",
        answer:
            "Yes. Our team can assist with sourcing suitable products and materials depending on your project requirements.",
    },
];

const FAQ = () => {
    return (
        <section className="faq-section">
            <div className="faq-container">

                {/* LEFT SIDE */}
                <motion.div
                    className="faq-intro"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>
                        Frequently Asked
                        <br />
                        <span>Questions</span>
                    </h2>

                    <p>
                        We’ve heard it all. Here’s everything you need to know
                        before working with us.
                    </p>

                    <a href="#contact" className="faq-button">
                        <span>ASK A QUESTION</span>

                        <span className="faq-button-arrow">
                            <ArrowRight size={19} />
                        </span>
                    </a>

                    <div className="faq-decoration">
                        <div className="faq-decoration-orange" />
                        <div className="faq-decoration-gray" />
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    className="faq-list"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {faqs.map((faq) => (
                        <div className="faq-item" key={faq.question}>
                            <div className="faq-question">
                                <span>{faq.question}</span>

                                <span className="faq-icon">
                                    <Plus size={20} strokeWidth={1.5} />
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default FAQ;
