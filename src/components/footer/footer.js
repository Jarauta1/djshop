import footer from "./footer.css"



function Footer() {
    return(<>

{/* 
<footer>
  <div class="container">
    <div class="grid">
      <div class="column-xs-12">
        <ul class="social">
          <li><a href="https://twitter.com/kato_katherine" target="_blank" rel="noopener noreferrer"><span class="fab fa-twitter"></span></a></li>
          <li><a href="https://www.linkedin.com/in/diegojarauta" target="_blank" rel="noopener noreferrer"><span class="fab fa-codepen"></span></a></li>
          <li><a href="https://www.github.com/Jarauta1" target="_blank" rel="noopener noreferrer"><span class="fab fa-github"></span></a></li>
        </ul>
        <p class="copyright">© {new Date().getFullYear()} hecho por DJarauta</p>
      </div>
    </div>
  </div>
</footer> */}

<footer className="footer-footer">
  <div class="footer-container">
    <div class="grid-footer">
      <div class="column-xs-12">
        <ul class="social social-networks square spin-icon">
          <li class="li-footer li-social"><a class="icon-linkedin a-social" href="https://www.linkedin.com/in/diegojarauta" target="_blank" rel="noopener noreferrer"><span class="fab-footer fa-codepen"></span></a></li>
          <li class="li-footer li-social"><a class="icon-github a-social" href="https://www.github.com/Jarauta1" target="_blank" rel="noopener noreferrer"><span class="fab-footer fa-github"></span></a></li>
        </ul>
        <p class="copyright-footer">© {new Date().getFullYear()} hecho por DJarauta</p>
      </div>
    </div>
  </div>
</footer>
 
    </>)
    }

    export default Footer;