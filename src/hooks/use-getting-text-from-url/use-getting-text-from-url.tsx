import * as React from "react";

interface UseGettingTextFromUrlProps {
  url: string;
}

const UseGettingTextFromUrl = (props: UseGettingTextFromUrlProps): string | undefined => {
  const {
    url,
  } = props;

  const [text, setText] = React.useState<string>();

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.text()) // The response is always decoded using UTF-8.
      .then((data) => {setText(data)})
      .catch((error) => console.log(error));
  }, [url])

  return text;
};

export default UseGettingTextFromUrl;
