import { profile } from '../data/content';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-mono mono">
          © {profile.year} {profile.name.toUpperCase()} — VIDEO / PHOTO / DESIGN
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/mellforemperor/">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61591516915411">Facebook</a>
          <a href="https://www.linkedin.com/in/fobbs-rolfenson/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
