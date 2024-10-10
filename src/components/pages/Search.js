import Footer from "../features/Footer";
import QuickSearch from "../features/QuickSearch";
import SearchEngine from "../features/SearchEngine";
import DashboardLayout from "../layout/DashboardLayout";
import { PageLayout } from "./styles";

const SearchPage = () => {
  return (
    <DashboardLayout>
      <PageLayout>
        <QuickSearch />
        <SearchEngine />
      </PageLayout>
      <Footer/>
    </DashboardLayout>
  );
};

export default SearchPage;
