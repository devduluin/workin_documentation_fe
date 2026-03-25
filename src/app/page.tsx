import HeroSection from "@/components/sections/HeroSection";
import TabSelector from "@/components/sections/TabSelector";
import ArticleSidebar from "@/components/sections/ArticleSidebar";
import ArticleContent from "@/components/sections/ArticleContent";
import InfoSection from "@/components/sections/InfoSection";
import CTASection from "@/components/sections/CTASection";
import BackToTop from "@/components/sections/BackToTop";
import MekariNavbar from "@/components/layouts/Navbar";
import TableOfContents from "@/components/sections/TableOfContent";
import MekariFooter from "@/components/layouts/Footer";
import MobileSidebarToggle from "@/components/sections/ToggleSidebar";

export default function ArticlePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MekariNavbar />
      <HeroSection />
      <TabSelector />

      <section className="hero py-8 relative">
        <div className="container z-20 ">
          <div className="text-center">
            <h2
              className="text-center color-#ffffff text-black lg:font-size-4xl"
              data-translation="true"
              data-us="Mekari user guide"
              data-id="Panduan pengguna Mekari"
            >
              Panduan pengguna Mekari
            </h2>
          </div>
          <div className="search rounded max-w-md my-4 mx-auto">
            <h2 className="sr-only">Pencarian</h2>

            <form
              role="search"
              className="form-field py-2 border rounded bg-white mb-0 transition"
              data-search=""
              data-instant="true"
              action="/hc/id/search"
              accept-charset="UTF-8"
              method="get"
            >
              <input type="hidden" name="utf8" value="✓" />
              <input
                type="search"
                name="query"
                id="query"
                placeholder="Temukan panduan di sini..."
                aria-label="Temukan panduan di sini..."
              />
            </form>

            <svg
              className="search-icon transition"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              viewBox="0 0 12 12"
              aria-hidden="true"
            >
              <circle
                cx="4.5"
                cy="4.5"
                r="4"
                fill="none"
                stroke="currentColor"
              ></circle>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                d="M11 11L7.5 7.5"
              ></path>
            </svg>
            <div className="absolute z-10 top-0 left-0 h-full w-full bg-cover bg-center"></div>

            <div className="absolute z-0 top-0 left-0 h-full w-full"></div>
          </div>
        </div>
      </section>

      {/* Section Title */}
      <div className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-340 mx-auto px-5 sm:px-8 text-center">
          <h1 className="text-[20px] md:text-[24px] font-extrabold text-slate-900 tracking-tight">
            Temukan artikel panduan sesuai kebutuhan Anda
          </h1>
          <p className="text-[13px] text-slate-400 mt-2">
            Pilih kategori di sidebar atau gunakan pencarian untuk menemukan
            artikel
          </p>
        </div>
      </div>

      {/* Main 3-Column Layout */}
      <div className="flex-1 bg-slate-50/30 mesh-bg">
        <div className="max-w-340 mx-auto px-5 sm:px-8 py-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            id="page-container"
          >
            {/* Left Sidebar */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-37.5">
                <ArticleSidebar />
              </div>
            </div>

            {/* Main Article */}
            <div className="lg:col-span-6">
              <div className="card-elevated rounded-2xl! p-7 md:p-9">
                <ArticleContent />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-37.5">
                <TableOfContents />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoSection />
      <CTASection />
      <MekariFooter />
      <BackToTop />
      <MobileSidebarToggle />
    </div>
  );
}
