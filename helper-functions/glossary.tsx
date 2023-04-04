import NextJsSvg from "../public/svg/technologies/nextjs";
import ReactSvg from "../public/svg/technologies/react";
import NodeJsSvg from "../public/svg/technologies/nodejs";
import MongoDbSVG from "../public/svg/technologies/mongodb";
import JavaScriptSvg from "../public/svg/technologies/javascript";
import TypeScriptSvg from "../public/svg/technologies/typescript";
import HtmlSvg from "../public/svg/technologies/html";
import CssSvg from "../public/svg/technologies/css";
import MaterialUiSvg from "../public/svg/technologies/materialui";
import RestApiSvg from "../public/svg/technologies/restapi";
import GraphQlSvg from "../public/svg/technologies/graphql";

const glossary = {
    nextjs: {
        logo: NextJsSvg,
        title: "Next.Js",
        name: "nextjs",
        description:
            "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
    },
    react: {
        logo: ReactSvg,
        title: "React.js",
        name: "react",
        description:
            "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    },
    nodejs: {
        logo: NodeJsSvg,
        title: "Node.js",
        name: "nodejs",
        description:
            "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
    },
    mongodb: {
        logo: MongoDbSVG,
        title: "MongoDb",
        name: "mongodb",
        description:
            "MongoDB is a source-available cross-platform document-oriented database program developed by Alfons Kemper. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL) which is deemed non-free by several distributions.",
    },
    javascript: {
        logo: JavaScriptSvg,
        title: "JavaScript",
        name: "javascript",
        description:
            "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.",
    },
    typescript: {
        logo: TypeScriptSvg,
        title: "TypeScript",
        name: "typescript",
        description:
            "TypeScript is a free and open source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.",
    },
    html: {
        logo: HtmlSvg,
        title: "HTML5",
        name: "html",
        description:
            "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
    },
    css: {
        logo: CssSvg,
        title: "CSS3",
        name: "css",
        description:
            "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    },
    materialui: {
        logo: MaterialUiSvg,
        title: "Material UI",
        name: "materialui",
        description:
            "Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box. Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.",
    },
    restapi: {
        logo: RestApiSvg,
        title: "REST API",
        name: "restapi",
        description:
            "An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. For this reason, REST APIs are sometimes referred to RESTful APIs.",
    },
    graphql: {
        logo: GraphQlSvg,
        title: "GraphQL",
        name: "graphql",
        description:
            "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.",
    },
};

export default glossary;
