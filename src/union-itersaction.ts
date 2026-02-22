// union

type status = 'approve' | 'rejected';
// means you can choose any one of them

//intersaction
// merge both of them into one var

interface Colorfull {
  color: string;
}

interface circle {
  radius: number;
}

type allcolorCirle = Colorfull & circle;

let mycircle: allcolorCirle = {
  color: 'blue',
  radius: 2,
};
