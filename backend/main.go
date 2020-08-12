package main
import (
	"fmt"
	"cocktail-maker/app"
)

func main() {
	a, err := app.NewApp()
	if err !=nil {
		panic(err)
	}
	fmt.Print(a)
}