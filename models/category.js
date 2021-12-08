import Vue from "vue"
function category() {
    return Vue.$axios.get('category')
}

export default category
