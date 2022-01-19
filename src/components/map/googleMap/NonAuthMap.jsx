import React from "react";

export const NonAuthMap = () => {
  const mapIframe = () => {
    return {
      __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12653.493842423097!2d126.9220044!3d37.5462641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe085e737592c4c9f!2z7ISd7KeE7Iqk7Yag66as!5e0!3m2!1sko!2skr!4v1642572438236!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    }
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div dangerouslySetInnerHTML={mapIframe()} />
    </div>
  );
}

