class Words {
	count(string) {
        let result = {};

        const strArr = string.toLowerCase().trim().split(/\s+/); //count multiple space as 1

        return strArr.map((word) => {
            result.hasOwnProperty(word) ? result[word]++ : result[word] = 1;
            //result[word] ? result[word]++ : result[word] = 1;
        })

    }
}

export default Words
