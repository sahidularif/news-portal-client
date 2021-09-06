import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
    const d = new Date();
    return (
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-left"><i>The Truth Speech</i> is a British newspaper published on Sundays. In the same place on the political spectrum as its sister papers <i>The Guardian</i> and <i>The Guardian</i> Weekly, whose parent company Guardian Media Group Limited acquired it in <i>1993</i>, it takes a social liberal or social democratic line on most issues.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links category">
              <li><a href="/home">Home</a></li>
              <li><a href="/business">Business</a></li>
              <li><a href="/technology">Technology</a></li>
              <li><a href="/politics">Politics</a></li>
              <li><a href="/world">World</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/about">Home</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/contribute-at-scanfcode">Contribute</a></li>
              <li><a href="/privacy-policy">Privacy Policy"</a></li>
              <li><a href="/Sitemap/sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; {d.getFullYear()} All Rights Reserved by 
            <a href="https://wwww.facebook.com/sahiul.arif" style={{textDecoration:'none'}}> ms-arif</a>
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fab fa-github"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fab fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    );
};

export default Footer;