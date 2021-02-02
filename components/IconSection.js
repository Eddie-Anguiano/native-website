import Wrapper from "./Wrapper";
import styles from "../styles/components/IconSection.module.scss";
import IconCard from "./IconCard";

export default function IconSection() {
  return (
    <Wrapper>
      <div className={styles.IconSection}>
        <h3 className={styles.subheader}>Who we are...</h3>
        <p className={styles.content}>
          Puvunga Wetlands Protectors is a 501(c)(3) non-profit organization,
          formed to defend the Puvungna/Los Cerritos Wetlands from expanding oil
          and gas operations and to preserve the wetlands ecosystem and tribal
          sites from destruction. We take direction from Tongva and Acjachemen
          culture keepers working to preserve sacred sites and ensure the
          survival of all our relations.
        </p>
        <h3>What we fight for...</h3>
        <div className={styles.cards__container}>
          <IconCard
            icon="/icons/oil-icon.svg"
            content="An end to Los Cerritos Wetland Oil Drilling"
          />
          <IconCard
            icon="/icons/bird-icon.svg"
            content="Preserve local land, waters, and wildlife"
          />
          <IconCard
            icon="/icons/native-icon.svg"
            content="Protect tribal cultural landscape"
          />
        </div>
      </div>
    </Wrapper>
  );
}
