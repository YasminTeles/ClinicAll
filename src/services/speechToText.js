import * as sdk from "microsoft-cognitiveservices-speech-sdk"

const subscriptionKey = "3482347f1fd64ccf8cbe6342ef3a5ae8"
const serviceRegion = "westus"

const createRecognizer = () => {
  const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput()
  const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion)
  speechConfig.speechRecognitionLanguage = "pt-BR"

  let recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig)

  recognizer.recognized = (s, e) => {
    if (e.result.reason === sdk.ResultReason.NoMatch) {
      const noMatchDetail = sdk.NoMatchDetails.fromResult(e.result)
      console.log(`(recognized)  Reason: ${sdk.ResultReason[e.result.reason]} | NoMatchReason: ${sdk.NoMatchReason[noMatchDetail.reason]}`)
    } else {
      console.log(`(recognized)  Reason: ${sdk.ResultReason[e.result.reason]} | Duration: ${e.result.duration} | Offset: ${e.result.offset}`)
      console.log(`Text: ${e.result.text}`)
    }
  }

  recognizer.canceled = (s, e) => {
    let str = `(cancel) Reason: ${sdk.CancellationReason[e.reason]}`
    if (e.reason === sdk.CancellationReason.Error) {
      str += `: ${e.errorDetails}`
    }
    console.log(str)
  }

  recognizer.startContinuousRecognitionAsync(() => {
    console.log("Recognition started")
  },
  (err) => {
    console.trace(`err - ${err}`)
    recognizer.close()
    recognizer = undefined
  })

  return recognizer
}

export default createRecognizer
