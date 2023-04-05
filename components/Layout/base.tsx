import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Layout/Header'));
const Footer = dynamic(() => import('@/components/Layout/Footer'));

type Props = {
  children: (state?: any) => JSX.Element;
  hideFooter?: boolean;
  hideHeader?: boolean;
  headerFixed?: boolean;
  title?: string;
  description?: string;
  descriptionKey?: string;
  ogImg?: string;
  url?: string;
};

const DefaultContent = () => (
  <div className="flex-column align-center justify-center p-4 text-center italic opacity-30">
    Sorry folks. Nothing to show here.
  </div>
);

const Layout = ({
  children = DefaultContent,
  hideFooter,
  headerFixed,
  hideHeader,
}: Props) => {
  return (
    <>
      <div className="pagePadding">
        {!hideHeader && <Header headerFixed={headerFixed} />}

        {children()}
        {!hideFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
