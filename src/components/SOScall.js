// SOSCall.js
import React, { useState } from "react";
import SimplePeer from "simple-peer";

const SOSCall = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [peer, setPeer] = useState(null);

  const initiateSOSCall = async () => {
    try {
      setIsCalling(true);

      // Get user media (microphone and camera)
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      // Set up WebRTC connection
      const peerObj = new SimplePeer({ initiator: true, stream });
      setPeer(peerObj);

      peerObj.on("signal", (data) => {
        // Send the signal data to the emergency service or designated contact
        // Example: Using WebSocket to send data to a signaling server or emergency service
        // socket.emit('emergency_signal', data);
        // This data should be handled by the emergency service to establish the call
      });

      peerObj.on("stream", (remoteStream) => {
        // Handle remote stream (if needed)
      });
    } catch (error) {
      console.error("Error initiating SOS call:", error);
      // Handle errors
    }
  };

  const endSOSCall = () => {
    if (peer) {
      peer.destroy();
      // Perform any additional cleanup
    }
    setIsCalling(false);
  };

  return (
    <div>
      {isCalling ? (
        <button onClick={endSOSCall}>End SOS Call</button>
      ) : (
        <button onClick={initiateSOSCall}>Initiate SOS Call</button>
      )}
    </div>
  );
};

export default SOSCall;
