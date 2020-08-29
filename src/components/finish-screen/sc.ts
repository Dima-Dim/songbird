import styled from "styled-components";
import {cssFonts, cssWidth} from "../../styled-components/variables";

export const finishScreenSC = {
  CONTAINER: styled.div`
    box-sizing: border-box;
    width: 320px;
    padding: 20px;
    text-align: center;
    background-color: #ffffff;
    border-radius: 20px;

    @media(min-width: ${cssWidth.tablet.FULL}px) {
      width: 450px;
      padding: 30px;
    }

    & h2 {
      margin: 0 0 20px;
      padding: 0;
      ${cssFonts.text.normal.REGULAR};
    }

    & h3 {
      margin: 0 0 15px 0;
      padding: 0;
      ${cssFonts.text.normal.BOLD};
    }

    & h3:before {
      content: "";
      display: block;
      width: 200px;
      height: 200px;
      margin: 0 auto 15px;
      background-repeat: no-repeat;
      background-position: center;
    }

    & h3 + p {
      margin: 0 0 20px 0;
      padding: 0;
      ${cssFonts.text.normal.REGULAR};
    }
  `,
  TITLE: styled.h3`
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M200 106.103v64.435c0 .863-.7 1.562-1.563 1.562H73.079v-67.559h125.358c.863 0 1.563.699 1.563 1.562z' fill='%23FFC39C'/%3E%3Cpath d='M187.928 104.541V172.1h10.51c.862 0 1.562-.699 1.562-1.562v-64.435c0-.863-.7-1.562-1.562-1.562h-10.51z' fill='%23FDAA8E'/%3E%3Cpath d='M40.59 81.859h50.64c13.963 0 25.285 11.316 25.285 25.272v44.594c0 16.631-13.49 30.11-30.125 30.11h-45.8V81.859z' fill='%23FFC39C'/%3E%3Cpath d='M91.23 81.859H79.157c13.963 0 25.286 11.316 25.286 25.272v44.594c0 16.631-13.49 30.11-30.125 30.11h12.073c16.634 0 30.124-13.479 30.124-30.11v-44.594c0-13.956-11.322-25.272-25.285-25.272z' fill='%23FDAA8E'/%3E%3Cpath d='M60.382 144.341c0-6.902-5.596-12.498-12.498-12.498H17.309c-6.903 0-12.498 5.596-12.498 12.498 0 6.903 5.595 12.499 12.498 12.499h30.575c6.902 0 12.498-5.596 12.498-12.499z' fill='%23FFC39C'/%3E%3Cpath d='M47.88 131.843H45.23a12.436 12.436 0 013.078 8.204v.009c0 6.9-5.598 12.494-12.502 12.494H7.888a12.473 12.473 0 009.425 4.29h30.566c6.905 0 12.503-5.594 12.503-12.494v-.009c0-6.9-5.598-12.494-12.503-12.494z' fill='%23FDAA8E'/%3E%3Cpath d='M61.647 119.354c0-6.903-5.595-12.499-12.498-12.499H12.498C5.596 106.855 0 112.451 0 119.353v.001c0 6.902 5.596 12.498 12.498 12.498h36.651c6.903 0 12.498-5.596 12.498-12.498z' fill='%23FFC39C'/%3E%3Cpath d='M49.145 106.855h-2.173a12.431 12.431 0 012.603 7.627v.009c0 6.9-5.598 12.494-12.502 12.494H2.603a12.482 12.482 0 009.9 4.867h36.642c6.905 0 12.502-5.594 12.502-12.494v-.009c0-6.9-5.597-12.494-12.502-12.494z' fill='%23FDAA8E'/%3E%3Cpath d='M61.647 94.357c0-6.903-5.595-12.498-12.498-12.498H12.498C5.596 81.859 0 87.454 0 94.357c0 6.902 5.596 12.498 12.498 12.498h36.651c6.903 0 12.498-5.596 12.498-12.498z' fill='%23FFC39C'/%3E%3Cpath d='M49.145 81.859h-2.042a12.432 12.432 0 012.472 7.458v.01c0 6.9-5.598 12.493-12.503 12.493h-34.6a12.486 12.486 0 0010.03 5.035h36.643c6.905 0 12.502-5.594 12.502-12.494v-.009c0-6.9-5.597-12.493-12.502-12.493z' fill='%23FDAA8E'/%3E%3Cpath d='M66.985 169.338c0-6.903-5.596-12.499-12.498-12.499H23.912c-6.902 0-12.498 5.596-12.498 12.499 0 6.902 5.596 12.498 12.498 12.498h30.575c6.902 0 12.498-5.596 12.498-12.498z' fill='%23FFC39C'/%3E%3Cpath d='M54.483 156.839h-2.238a12.433 12.433 0 012.668 7.71v.009c0 6.9-5.598 12.494-12.502 12.494H14.081a12.482 12.482 0 009.834 4.784h30.567c6.905 0 12.502-5.594 12.502-12.494v-.009c0-6.9-5.597-12.494-12.502-12.494z' fill='%23FDAA8E'/%3E%3Cpath d='M116.515 113.323s3.637-31.507-17.413-48.347c-21.049-16.84-17.83-46.558-24.268-46.806-6.44-.247-19.123 6.662-13.187 26.994 9.472 32.442 0 49.193 15.333 74.189 0 0 8.234 6.131 23.02 6.131s16.515-12.161 16.515-12.161z' fill='%23FFC39C'/%3E%3Cpath d='M99.102 64.975c-21.049-16.84-17.83-46.557-24.268-46.805-2.552-.098-6.085.93-9.05 3.47 3.112 8.365 4.49 29.93 21.246 43.335 21.049 16.84 17.413 48.348 17.413 48.348s-.759 5.329-5.563 8.931c-1.375 1.032-.678 3.227 1.042 3.229H100c14.787 0 16.515-12.16 16.515-12.16s3.637-31.507-17.413-48.348z' fill='%23FDAA8E'/%3E%3C/svg%3E");
    }
  `,
  WINNER_TITLE: styled.h3`
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M74.625 130.449c-.391 0-.78-.023-1.167-.069-3.5-.418-6.286-2.577-7.844-6.078a2.969 2.969 0 115.427-2.413c.692 1.557 1.742 2.43 3.121 2.594 1.62.192 3.54-.627 4.561-1.953.937-1.216 1.275-2.923.884-4.454-.25-.978-.91-2.303-2.638-3.062-5.146-2.262-11.006-.094-17.792 2.414-12.292 4.544-27.59 10.2-44.596-10.021l-7.044-8.375a8.18 8.18 0 01-1.901-6.02 8.18 8.18 0 012.919-5.598 18.236 18.236 0 0116.526-3.6l3.458.95a5.8 5.8 0 005.268-1.155l9.382-7.89a2.97 2.97 0 013.823 4.544l-9.383 7.891a11.742 11.742 0 01-10.662 2.336l-3.458-.949a12.297 12.297 0 00-11.143 2.427 2.28 2.28 0 00-.814 1.562 2.282 2.282 0 00.53 1.68l7.043 8.374c14.32 17.025 25.818 12.774 37.992 8.273 7.324-2.708 14.898-5.508 22.241-2.28 3.055 1.343 5.187 3.839 6.002 7.028.846 3.31.124 6.878-1.932 9.548-2.044 2.656-5.469 4.296-8.803 4.296zM130.267 83.559c-1.56 0-3.126-.322-4.58-.97-3.006-1.342-5.108-3.863-5.916-7.1-1.944-7.782 2.092-14.776 5.996-21.54 6.489-11.24 12.617-21.858-1.752-38.842l-7.068-8.354a2.282 2.282 0 00-1.566-.806 2.272 2.272 0 00-1.676.54 12.296 12.296 0 00-4.27 10.575l.353 3.568a11.74 11.74 0 01-4.1 10.116l-9.36 7.918a2.969 2.969 0 11-3.836-4.534l9.36-7.917a5.798 5.798 0 002.025-5l-.352-3.567a18.236 18.236 0 016.333-15.684A8.18 8.18 0 01115.867.03a8.183 8.183 0 015.614 2.888l7.068 8.355c17.065 20.172 8.912 34.297 2.361 45.647-3.616 6.266-6.74 11.678-5.378 17.13.457 1.831 1.653 2.706 2.574 3.116 1.444.645 3.183.599 4.54-.12 1.478-.782 2.611-2.534 2.693-4.166.07-1.386-.613-2.569-2.031-3.514a2.97 2.97 0 013.294-4.942c3.189 2.125 4.846 5.235 4.669 8.756-.188 3.7-2.537 7.364-5.847 9.115a11.043 11.043 0 01-5.157 1.265z' fill='%23FF901D'/%3E%3Cpath d='M134.887 179.938l-18.679 1.342-17.567 18.036a2.264 2.264 0 01-1.62.684H34.404c-2.16 0-3.092-2.739-1.379-4.057l57.338-44.087 18.435-30.729c3.091-5.15 10.236-5.945 14.382-1.6l34.593 26.501c5.229 4.006 5.552 11.769.676 16.196l-14.54 13.2a18.208 18.208 0 01-9.023 4.514z' fill='%23FED9A8'/%3E%3Cpath d='M157.774 146.029l-8.457-6.48c.909 3.623-.112 7.655-3.139 10.404l-14.54 13.199a18.202 18.202 0 01-9.024 4.513l-18.678 1.343L73.749 200h23.27a2.26 2.26 0 001.622-.684l17.567-18.036 18.679-1.342a18.208 18.208 0 009.023-4.514l14.54-13.199c4.877-4.427 4.553-12.191-.676-16.196z' fill='%23F4C28C'/%3E%3Cpath d='M131.446 130.947l3.491 3.755c-1.965.21-3.979-.457-5.404-1.99l-3.176-3.417c1.825-.335 3.756.218 5.089 1.652z' fill='%23E8D06B'/%3E%3Cpath d='M176.414 163.081l-22.177 18.652-58.468-79.967 11.51-9.68 69.135 70.995z' fill='%23F7BC14'/%3E%3Cpath d='M25.392 69.044l19.107 22.718c13.55 16.111 34.897 24.027 57.506 21.326l13.407-1.602 3.876-12.933c6.536-21.813 2.396-44.2-11.154-60.31l-19.108-22.72-63.634 53.52z' fill='%23FED130'/%3E%3Cpath d='M108.134 38.243L89.026 15.524l-13.65 11.48 20.146 23.85c13.55 16.11 17.691 38.498 11.154 60.31l-.424 1.417 9.16-1.094 3.876-12.934c6.536-21.812 2.395-44.2-11.154-60.31z' fill='%23F7BC14'/%3E%3Cpath d='M95.041 17.93l-68.31 57.452a2.354 2.354 0 01-3.318-.286l-4.322-5.14a2.354 2.354 0 01.286-3.317l68.31-57.453a2.354 2.354 0 013.318.287l4.322 5.14c.837.995.71 2.48-.286 3.316z' fill='%23FFB125'/%3E%3Cpath d='M95.327 14.613l-4.322-5.14a2.354 2.354 0 00-3.317-.287L75.62 19.336l7.353 8.743 12.068-10.15a2.354 2.354 0 00.286-3.316z' fill='%23FF901D'/%3E%3Cpath d='M73.865 61.363l12.226 5.358a.52.52 0 00.483-.034l11.345-7.034a.52.52 0 01.791.494L97.392 73.43a.52.52 0 00.182.448l10.195 8.617a.52.52 0 01-.225.905l-13.04 2.851a.52.52 0 00-.37.312L89.089 98.92a.52.52 0 01-.93.066l-6.742-11.52a.52.52 0 00-.41-.257l-13.313-.978a.52.52 0 01-.35-.864l8.874-9.972a.52.52 0 00.116-.47L73.15 61.964a.52.52 0 01.715-.6z' fill='%23fff'/%3E%3Cpath d='M193.018 161.478l-41.657 35.036a3.868 3.868 0 01-5.784-.934l-6.885-11.198a3.867 3.867 0 01.805-4.986l38.69-32.54a3.868 3.868 0 015.05.061l9.852 8.703a3.866 3.866 0 01-.071 5.858z' fill='%23FFB125'/%3E%3Cpath d='M193.089 155.619l-9.852-8.702a3.868 3.868 0 00-5.05-.062l-11.288 9.495 15.713 13.88 10.406-8.752a3.867 3.867 0 00.071-5.859z' fill='%23FF901D'/%3E%3Cpath d='M150.877 161.609a7.508 7.508 0 0010.612.393l9.397-8.731a7.505 7.505 0 00.392-10.607 7.507 7.507 0 00-10.611-.393l-9.398 8.731a7.507 7.507 0 00-.392 10.607z' fill='%23F4C28C'/%3E%3Cpath d='M151.269 151.001l9.398-8.73a7.507 7.507 0 0112.519 6.696 7.507 7.507 0 00-9.971.22l-9.398 8.73a7.475 7.475 0 00-2.3 4.304 7.509 7.509 0 01-.248-11.22z' fill='%23FED9A8'/%3E%3Cpath d='M143.348 148.062a7.62 7.62 0 0010.772.398l9.231-8.576a7.62 7.62 0 00.398-10.767 7.62 7.62 0 00-10.771-.399l-9.232 8.576a7.621 7.621 0 00-.398 10.768z' fill='%23F4C28C'/%3E%3Cpath d='M143.746 137.294l9.232-8.576a7.62 7.62 0 0112.721 6.717 7.62 7.62 0 00-10.183.171l-9.231 8.576a7.584 7.584 0 00-2.348 4.449 7.621 7.621 0 01-.191-11.337z' fill='%23FED9A8'/%3E%3Cpath d='M132.927 136.99a7.621 7.621 0 0010.772.398l9.232-8.576a7.621 7.621 0 00-10.374-11.166l-9.232 8.576a7.622 7.622 0 00-.398 10.768z' fill='%23F4C28C'/%3E%3Cpath d='M133.326 126.222l9.232-8.576a7.62 7.62 0 0111.319 1.061 7.587 7.587 0 00-4.648 2.017l-9.232 8.577a7.62 7.62 0 00-.946 10.104 7.62 7.62 0 01-5.725-13.183z' fill='%23FED9A8'/%3E%3Cpath d='M122.892 125.503a7.62 7.62 0 0010.771.398l9.232-8.576a7.62 7.62 0 10-10.373-11.166l-9.232 8.576a7.621 7.621 0 00-.398 10.768z' fill='%23F4C28C'/%3E%3Cpath d='M123.29 114.735l9.232-8.576a7.62 7.62 0 0112.722 6.71 7.62 7.62 0 00-10.188.167l-9.232 8.576a7.587 7.587 0 00-2.349 4.456 7.621 7.621 0 01-.185-11.333z' fill='%23FED9A8'/%3E%3Cpath d='M140.531 131.335l-1.712 1.591c-2.693 2.502-6.85 2.406-9.286-.214l-4.31-4.636c-2.11-2.27-5.714-2.34-8.033-.158 1.298 20.078-26.826 23.939-26.826 23.939l11.954-29.403a14.123 14.123 0 013.707-5.776l8.49-7.99c4.127-3.884 10.542-3.761 14.301.276l12.179 13.082c2.441 2.621 2.234 6.783-.464 9.289z' fill='%23FED9A8'/%3E%3C/svg%3E");
    }
  `,
};