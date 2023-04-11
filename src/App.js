import React, { useState } from 'react'
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";


const App = () => {
  const [isText, setText] = useState()
  const [isCopied, setCopied] = useClipboard(isText, {
    successDuration:1000
});

 const startListening = () =>SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
<>
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <br />
      <p>Convert your audio into text</p>
    </div>
    
    <div className="main-content" onClick={()=> setText(transcript)}>
    {transcript}
      </div>
      
      <div className="btn-style">
      <button onClick={setCopied}>
      {isCopied ? 'Copied!' : 'Copy'}
      </button>      <button onClick={startListening}>Start Recording</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Recording</button>
      
      </div>

</>
  )
}

export default App