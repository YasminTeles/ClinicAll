import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics"

// const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics")

const key = "83200d7334d4496180aaca4d6ffa9ddb"
const endpoint = "https://clinicall.cognitiveservices.azure.com/"

const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key))

async function sentimentAnalysis(client) {
  const sentimentInput = [
    "I had the best day of my life. I wish you were there with me.",
  ]
  const sentimentResult = await client.analyzeSentiment(sentimentInput)

  sentimentResult.forEach((document) => {
    console.log(`ID: ${document.id}`)
    console.log(`\tDocument Sentiment: ${document.sentiment}`)
    console.log("\tDocument Scores:")
    console.log(`\t\tPositive: ${document.confidenceScores.positive.toFixed(2)} \tNegative: ${document.confidenceScores.negative.toFixed(2)} \tNeutral: ${document.confidenceScores.neutral.toFixed(2)}`)
    console.log(`\tSentences Sentiment(${document.sentences.length}):`)
    document.sentences.forEach((sentence) => {
      console.log(`\t\tSentence sentiment: ${sentence.sentiment}`)
      console.log("\t\tSentences Scores:")
      console.log(`\t\tPositive: ${sentence.confidenceScores.positive.toFixed(2)} \tNegative: ${sentence.confidenceScores.negative.toFixed(2)} \tNeutral: ${sentence.confidenceScores.neutral.toFixed(2)}`)
    })
  })
}

// sentimentAnalysis(textAnalyticsClient)

export async function keyPhraseExtraction(text) {
  const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key))
  const keyPhraseResult = await textAnalyticsClient.extractKeyPhrases(text)

  keyPhraseResult.forEach((document) => {
    console.log(`ID: ${document.id}`)
    console.log(`\tDocument Key Phrases: ${document.keyPhrases}`)
  })
  return keyPhraseResult
}
// keyPhraseExtraction(textAnalyticsClient)
