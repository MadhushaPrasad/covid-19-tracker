import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer class="site-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div class="offset-2 col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">Home</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Symptom</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Graph
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">Sri Lanka</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">About</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by
                <a href="https://madhushaprasad.s3.ap-south-1.amazonaws.com/index.html">
                  {' '}
                  Madhusha Prasad
                </a>
                .
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a
                    class="facebook"
                    href="https://www.facebook.com/madusha.prasad.397/"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="linkedin"
                    href="https://www.linkedin.com/in/madhusha-prasad-045a82187"
                  >
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
