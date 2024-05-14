type ToggleActiveClassProps = {
  buttons: NodeListOf<HTMLButtonElement> | null;
  initialPage: number | null;
  endPage: number;
};

export const toggleActiveClass = ({
  buttons,
  initialPage,
  endPage
}: ToggleActiveClassProps): void => {
  buttons?.forEach((button) => {
    const buttonValue = Number(button.textContent);
    const isSelected = initialPage !== null && buttonValue >= initialPage && buttonValue <= endPage;
    if (initialPage && isSelected) {
      button.classList.add('Mui-selected');
    } else {
      if (buttonValue !== endPage) {
        button.classList.remove('Mui-selected');
      }
    }
  });
};
