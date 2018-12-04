import React, { Fragment } from 'react'

const Footer = () => {
  return <Fragment>
    <div id="footer_spacer"> </div>
    <footer>
      <div id="social_media">
        <div>
          <a href="http://www.linkedin.com/groups/Winnipegjs-4520628?home=&gid=4520628&trk=anet_ug_hm&goback=%2Egmp_4520628">
            <img src="/images/linkedin-icon.png" alt="Join us on Linkedin" title="Join us on Linkedin" />
          </a>
          <span>Join our <a href="http://www.linkedin.com/groups/Winnipegjs-4520628?home=&gid=4520628&trk=anet_ug_hm&goback=%2Egmp_4520628">Group</a> on Linkedin</span>
        </div>
        <div>
          <a href="http://twitter.com/winnipegjs">
            <img src="/images/twitter-icon.png" alt="Follow us on Twitter" title="Follow us on Twitter" />
          </a>
          <span>Follow @<a href="http://twitter.com/winnipegjs">WinnipegJS</a> on Twitter</span>
        </div>
        <div>
          <a href="http://github.com/yagudaev/winnipegjs">
            <img src="/images/github-icon.png" alt="Contribute on Github" title="contribute on Github" />
          </a>
          <span>Contribute on <a href="http://github.com/yagudaev/winnipegjs">Github</a></span>
        </div>
      </div>
      <div id="copyrights">
        <div>
          Contact
                      <a href="mailto:mail@peterbraun.ca">Peter Braun</a>
        </div>
        <div>
          Developed by
                      <a href="http://www.yagudaev.com">Michael Yagudaev</a>
        </div>
        <div>
          Mobile by
                      <a href="http://jacobfriesen.com/">Jacob Friesen</a>
        </div>
        <div>
          Designed by
                      <a href="http://www.vadimbrodsky.com">Vadim Brodsky</a>
        </div>
      </div>
      <div className="transfer_link">
        <a href="/set_desktop?to=true&amp;page=#&amp;title=#Winnipeg.js">Desktop Version</a>
      </div>
    </footer>
  </Fragment>
}

export default Footer
