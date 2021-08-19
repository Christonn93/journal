async function setup() {
    const data = await getData()
    const formattedData = formatDataNicely(data)
    await doStuff(formattedData)
  }
  
  setup()