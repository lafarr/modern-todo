import { Router } from "express";
import { getAllTodoLists, createTodoList, deleteTodoList, addTodoEntry, editTodoEntry, deleteTodoEntry, getTodoList } from "../controllers/todoController";
import { isAuthenticated } from "../middleware/auth";

const router = Router();

router.get("/get-todos", isAuthenticated, getAllTodoLists);

router.get("/get-todos/:todoListId", isAuthenticated, getTodoList);

router.post("/create-todo", isAuthenticated, createTodoList);

router.delete("/delete-todo", isAuthenticated, deleteTodoList);

router.post("/add-entry", isAuthenticated, addTodoEntry);

router.patch("/edit-entry", isAuthenticated, editTodoEntry);

router.delete("/delete-entry", isAuthenticated, deleteTodoEntry);

export default router;