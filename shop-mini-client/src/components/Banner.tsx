type BannerProps = {
  imageUrl?: string;
  onCtaClick?: () => void;
};

export default function Banner({
  imageUrl = "/images/Banner/101store.png",
  onCtaClick,
}: BannerProps) {
  const handleBuyNow = () => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    const section = document.getElementById("products-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-banner" aria-label="Banner 101 PC Store">
      <img
        src={imageUrl}
        alt="101Store PC Store - Linh kiện máy tính chính hãng"
        className="hero-banner__img"
      />
      <button
        type="button"
        className="hero-banner__cta-hotspot"
        onClick={handleBuyNow}
        aria-label="Mua ngay sản phẩm"
      />
    </section>
  );
}