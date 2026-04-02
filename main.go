package main

import (
	"log"
	"time"

	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/static"
)

func main() {
	app := fiber.New()

	app.Get("/health", func(c fiber.Ctx) error {
		return c.SendString("I am alive. Time is: " + time.Now().String())
	})

	// Раздаём статику из папки out
	app.Get("/*", static.New("./frontend/out"))

	log.Fatal(app.Listen(":3000", fiber.ListenConfig{EnablePrefork: true}))
}
