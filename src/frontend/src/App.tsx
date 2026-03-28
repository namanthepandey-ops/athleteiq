import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Features from "./pages/Features";
import Home from "./pages/Home";

// Export Link for use in other components
export { Link };

function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ref = useRef<HTMLDivElement>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional trigger on pathname
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("page-enter");
    void el.offsetWidth;
    el.classList.add("page-enter");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return <div ref={ref}>{children}</div>;
}

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col text-foreground relative">
      {/* Fixed full-screen background image */}
      <div
        className="fixed inset-0 bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('/assets/uploads/image-019d3393-733a-7699-b6d3-c023bb861b05-1.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          imageRendering:
            "high-quality" as React.CSSProperties["imageRendering"],
        }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/65 z-0" />
      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const featuresRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/features",
  component: Features,
});
const demoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/demo",
  component: Demo,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  featuresRoute,
  demoRoute,
  aboutRoute,
  contactRoute,
]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
