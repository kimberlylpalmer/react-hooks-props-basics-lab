import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a> {/* Display GitHub link */}
      <br />
      <a href={linkedin}>{linkedin}</a> {/* Display LinkedIn link */}
    </div>
  );
}

export default Links;
console.log(Links);
