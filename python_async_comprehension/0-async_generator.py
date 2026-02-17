#!/usr/bin/env python3
"""
This module provides an async_generator function.
"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    This function takes no argument and yields a random number.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.random()


async def main():
    """
    This function iterates through the async_generator.
    """
    async for value in async_generator():
        pass


if __name__ == "__main__":
    asyncio.run(main())
