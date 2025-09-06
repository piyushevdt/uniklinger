import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import DrawerAppBar from "./components/layout/drawer";
import Home from "./components/Home.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Careers from "./components/Careers.jsx";
import Products from "./components/Products.jsx";
import IndustrySolution from "./components/IndustrySolution.jsx";
import Blog from "./components/Blog.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ProductsListing from "./components/ProductListing.jsx";
import IndustrySolutionDetails from "./components/IndustrySolutionDetails.jsx";
import Footer from "./components/layout/footer.js";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import NotFoundPage from "./components/NotFound.jsx";
import Insights from "./components/Insights.jsx";
import BlogDetail from "./components/BlogDetails.jsx";
import CompanyUpdates from "./components/CompanyUpdates.jsx";
import "./transition.css"; // For custom CSS transitions
import TermsAndConditions from "./components/TermsAndConditions.jsx";

const Layout = () => (
  <>
    <DrawerAppBar />
    <Outlet />
    {/* <Fab className="floatingButton"  aria-label="add">
        <img alt="accordion-icon"src={chatBotSvg}/>
      </Fab> */}
    <Footer />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Routes wrapped in Layout */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/partner-with-us" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<IndustrySolution />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/about-us/company-updates"
              element={<CompanyUpdates />}
            />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/products-listing" element={<ProductsListing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route
              path="/industry/:slug"
              element={<IndustrySolutionDetails />}
            />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<BlogDetail />} />
          </Route>

          {/* Route without Layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
