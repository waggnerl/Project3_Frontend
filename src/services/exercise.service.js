import axios from "axios";

class ExerciseService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });
  }

  // POST /api/students
  addExercise = async (
    name,
    description,
    interval,
    reps,
    sets,
    trainId,
    activicties
  ) => {
    return this.api.post(`/exercise/create`, {
      name,
      description,
      interval,
      trainId,
      reps,
      sets,
      activicties,
    });
  };

  // Delete /api/students
  deleteStudentFromPersonal = async (id, studentToRemove) => {
    return this.api.post(`/student/${id}/${studentToRemove}/delete`);
  };

  // GET /api/students
  getAll = async (trainId) => {
    return this.api.get(`/exercise/getAll/${trainId}`);
  };

  // GET /api/students/:id
  getOnesFromStudent = (_id) => {
    const personalId = _id;
    return this.api.get(`/student/${personalId}`);
  };

  // PUT /api/students/:id
  updateOne = async (requestBody) => {
    console.log(requestBody);
    return this.api.put(`/exercise/update`, requestBody);
  };

  // DELETE /api/students/:id
  deleteProject = async (trainId, exetciseId) => {
    return this.api.post(`/exercise/delete`, {
      trainId,
      exetciseId,
    });
  };
}

// Create one instance of the service
const exerciseService = new ExerciseService();

export default exerciseService;
