#!/usr/bin/env python3
"""
This module provides an async_generator function. 
"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    This function takes no argument and yields a random number.
    """
    for _ in range(int(random.uniform(0, 10))):
        await asyncio.sleep(0.5)
        yield random.random()

async def main():
    async for value in async_generator():
        pass


if __name__ == "__main__":
    asyncio.run(main())
    
