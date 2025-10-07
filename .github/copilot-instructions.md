<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project is a minimal reproduction to demonstrate that `expect.soft` doesn't work with `toMatchSnapshot` in Vitest.

The goal is to create a simple test case that shows:
1. Regular `expect().toMatchSnapshot()` works normally
2. `expect.soft().toMatchSnapshot()` doesn't behave as expected (soft assertions should continue executing after failure, but snapshot matching may not work properly)

Key requirements:
- Use Vitest as testing framework
- Focus on snapshot testing with soft assertions
- Keep the reproduction minimal and focused