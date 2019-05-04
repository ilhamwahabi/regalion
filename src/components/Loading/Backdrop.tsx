import React from "react";
import { connect } from "react-redux";

const Backdrop = ({ loading }: any) =>
  loading && (
    <div
      style={{
        backgroundColor: "#212121",
        opacity: 0.5,
        position: "fixed",
        width: "100vw",
        height: "100%"
      }}
    />
  );

const mapStateToProps = ({ loading }: { loading: boolean }) => {
  return { loading };
};

export default connect(mapStateToProps)(Backdrop);
