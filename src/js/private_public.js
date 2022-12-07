class Experiment {
    publicField = 2; // 퍼블릭 프로퍼티, 위부에서 프로퍼티에 접근하여 값을 사용하거나 수정이가능하다.
    #privateField = 0; // 프라이빗 프로퍼티, 오직 클래스안에서만 사용, 변경이 가능하다. 외부에서 사용불가.
  }
  const experiment = new Experiment();
  console.log(experiment.publicField);
  console.log(experiment.privateField); // undefined