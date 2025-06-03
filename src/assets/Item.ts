import CircuitBreaker from "./breaker.webp"
import Cutoutandarrester from "./cutout.webp"
import CurrentTransformer from "./mv-curr-transf-ritz.webp"
import Conductors from "./conductors.webp"
import DistributionTransformer from "./distribution.webp"
import Poles from "./poles.webp"
import PoleLinesMaterials from "./Figure-1-Pole-Line-Hardware.webp"
import PotentialTransformer from "./potential.webp"
import PowerFuses from "./sm-power-fuse1-242-30-p12.jpg"
import TransformerOil from "./transformer-oil-isi-3a-335-3a-1993-500x500-1--500x500.webp"

interface ElectricalComponent {
    name: string;
    description: string;
    image: string;
  }
  const Item: ElectricalComponent[] = [
    {
      name: "Circuit Breakers",
      description: "Essential safety devices that protect electrical systems by interrupting fault currents.",
      image: CircuitBreaker
    },
    {
      name: "Cutout & Arrester Combination",
      description: "Provides dual protection against overloads and lightning surges on distribution lines.",
      image: Cutoutandarrester
    },
    {
      name: "Current Transformers",
      description: "Enable accurate current measurement and monitoring in high-voltage systems.",
      image: CurrentTransformer
    },
    {
      name: "Conductor",
      description: "High-quality cables and wires designed for efficient power transmission.",
      image: Conductors
    },
    {
      name: "Distribution Transformer",
      description: "Reduces voltage for safe and efficient power delivery to end users.",
      image: DistributionTransformer
    },
    {
      name: "Poles (Concrete, Wood, Steel)",
      description: "Durable utility poles built for long-lasting support of overhead lines.",
      image: Poles
    },
    {
      name: "Pole Line Materials",
      description: "Reliable hardware and accessories for building and maintaining pole line systems.",
      image: PoleLinesMaterials
    },
    {
      name: "Potential Transformers",
      description: "Convert high voltages into measurable levels for metering and control applications.",
      image: PotentialTransformer
    },
    {
      name: "Power Fuses",
      description: "Protect equipment from overcurrent damage by safely isolating faulted circuits.",
      image: PowerFuses
    },
    {
      name: "Transformer Oil",
      description: "Premium-grade oil used for insulation and cooling in power transformers.",
      image: TransformerOil
    }
  ];
  

  export default Item 