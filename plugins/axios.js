import {MessageBox} from 'element-ui';

export default function ({$axios, redirect}) {
  $axios.setBaseURL(process.env.NODE_ENV === "development" ? "http://www.fs-developer.com/api" : "http://www.fs-developer.com/api")
  $axios.onResponse(response => {
    let {data} = response
    if (data.statusCode !== 0) {
      if (process.client) {
        showErrMessage(data.message)
        return
      }
      return redirect("/500")
    }
    return data
  })
  $axios.onError(error => {
    error = JSON.parse(JSON.stringify(error))
    const code = error.code
    const status = error.status
    if (process.client) {
      showErrMessage(error.message)
      return
    }
    switch (status) {
      case 404:
        return redirect("/404")
      default:
        return redirect("/500")
    }
  })
}

function showErrMessage(message) {
  MessageBox.alert(message)
}
