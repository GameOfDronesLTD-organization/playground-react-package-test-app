export type Drone = {
  id: number;
  model_id: number;
  status: string;
  price: number;
  serial_number: number;
  DroneModel: {
    id: number;
    name: string;
    image: string;
  };
};
