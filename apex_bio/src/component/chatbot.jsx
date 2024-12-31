import React from "react";
import ChatBot from "react-chatbotify";

const MyChatBot = () => {
  const [form, setForm] = React.useState({});
  const formStyle = {
    marginTop: 10,
    marginLeft: 20,
    border: "1px solid #491d8d",
    padding: 10,
    borderRadius: 5,
    maxWidth: 300,
  };

  const flow = {
    start: {
      message:
        "Hi there! 👋 Welcome to the AI Solution Assistant. What's your name?",
      function: (params) => setForm({ ...form, name: params.userInput }),
      path: "ask_industry",
    },
    ask_industry: {
      message: (params) =>
        `Nice to meet you, ${form.name}! 😊 Could you tell me which industry you're working in? For example, healthcare, finance, retail, or something else.`,
      function: (params) => setForm({ ...form, industry: params.userInput }),
      path: "ask_problem",
    },
    ask_problem: {
      message: (params) =>
        `Got it! 🌟 What specific problem are you trying to solve with AI in the ${form.industry} industry?`,
      function: (params) => setForm({ ...form, problem: params.userInput }),
      path: "ask_data",
    },
    ask_data: {
      message:
        "Interesting! 💡 Do you already have data available for this problem? If yes, could you briefly describe it?",
      function: (params) => setForm({ ...form, data: params.userInput }),
      path: "ask_solution_type",
    },
    ask_solution_type: {
      message:
        "Great! 🔍 What type of AI solution are you looking for? For example, prediction, classification, recommendation, or automation.",
      function: (params) =>
        setForm({ ...form, solutionType: params.userInput }),
      path: "ask_challenges",
    },
    ask_challenges: {
      message:
        "What challenges are you facing in implementing this solution? For example, lack of data, technical expertise, or budget constraints?",
      function: (params) => setForm({ ...form, challenges: params.userInput }),
      path: "ask_expectations",
    },
    ask_expectations: {
      message:
        "What are your expectations from this AI solution? For instance, improving efficiency, reducing costs, or enhancing customer experience?",
      function: (params) =>
        setForm({ ...form, expectations: params.userInput }),
      path: "ask_pages",
    },
    ask_pages: {
      message:
        "Thank you for sharing! 🌟 Would you like to explore some pages on our website for more information? Please choose an option: \n- Testimonials \n- About Us \n- Services \n- Contact Us",
      options: ["Testimonials", "About Us", "Blog", "Contact Us"],
      chatDisabled: true,
      path: "show_links",
    },
    show_links: {
      transition: { duration: 0 },
      chatDisabled: true,
      path: async (params) => {
        let link = "";
        switch (params.userInput) {
          case "Testimonials":
            link = "http://localhost:5173/TestimonialsPopup";
            break;
          case "About Us":
            link = "http://localhost:5173/about";
            break;
          case "Blog":
            link = "http://localhost:5173/bloBlogPage";
            break;
          case "Contact Us":
            link = "http://localhost:5173/contact";
            break;
          default:
            return "unknown_input";
        }
        await params.injectMessage("Sit tight! I'll send you right there!");
        setTimeout(() => {
          window.open(link);
        }, 1000);
        return "repeat";
      },
    },
    repeat: {
      transition: { duration: 100 },
      path: "start",
    },
    end: {
      message:
        "Thank you for providing the details! Here's a summary of your input:",
      component: (
        <div style={formStyle}>
          <p>
            <strong>Name:</strong> {form.name}
          </p>
          <p>
            <strong>Industry:</strong> {form.industry}
          </p>
          <p>
            <strong>Problem:</strong> {form.problem}
          </p>
          <p>
            <strong>Data:</strong> {form.data}
          </p>
          <p>
            <strong>AI Solution Type:</strong> {form.solutionType}
          </p>
          <p>
            <strong>Challenges:</strong> {form.challenges}
          </p>
          <p>
            <strong>Expectations:</strong> {form.expectations}
          </p>
        </div>
      ),
      options: ["Restart"],
      chatDisabled: true,
      path: "start",
    },
  };

  return (
    <ChatBot
      settings={{
        header: { title: "AI Solution Assistant" },
        icon: { icon: false },
      }}
      flow={flow}
    />
  );
};

export default MyChatBot;
