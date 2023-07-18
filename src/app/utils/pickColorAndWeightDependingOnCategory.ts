export const pickColorAndWeightDependingOnCategory = (category:string) => {

  let color = "#9d0208";
  let gradeWeight = 5;

  switch (category) {
    case "Short-Test":
      color = "#dc2f02";
      gradeWeight = 4;
      break;
    case "Oral Answer":
      color = "#f77f00";
      gradeWeight = 3;
      break;
    case "Project":
      color = "#2a9d8f";
      gradeWeight = 2;
      break;
    case "Activity":
      color = "#8ecae6";
      gradeWeight = 1;
      break;
  }

  return{color , gradeWeight}
}