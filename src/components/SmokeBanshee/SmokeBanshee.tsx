import smokeBansheeImage from "/smoke-banshee-logo-black.jpeg";

function SmokeBanshee() {
  return (
    <div style={{ margin: "0 auto" }}>
      <a
        href="https://smokebanshee.bandcamp.com/album/the-wheel"
        aria-label="Click this link to go to the Smoke Banshee bandcamp page"
      >
        <img
          alt="Smoke Banshee band logo"
          style={{ height: "70vh" }}
          src={smokeBansheeImage}
        />
      </a>
    </div>
  );
}

export default SmokeBanshee;
